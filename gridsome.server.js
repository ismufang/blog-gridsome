// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const utils = require('./src/utils/util')
const markdownit = require('markdown-it')()
// const UserApi = require('@/api/user')
// const GistApi = require('./src/api/gist')
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/blog/:id',
      component: './src/pages/blog/Details.vue'
    })
    createPage({
      path: '/project/:name',
      component: './src/pages/project/Details.vue'
    })
  })

  api.loadSource(async ({
    addCollection,
  }) => {
    // console.log(data)
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    

    const Gists = addCollection('Gists')

    try {
      const {gistData} = await collectFn('gistData', 'https://api.github.com/users/GitHub-Laziji/gists')
  
      for (let i = 0; i < gistData.length; i++) {
        for (let key in gistData[i].files) {
          let obj = {}
          obj['title'] = key
          obj['url'] = gistData[i].files[key]
          obj['description'] = gistData[i]['description']
          obj['id'] = gistData[i]['id']
          obj['createTime'] = utils.utcToLocal(gistData[i]['created_at'])
          obj['updateTime'] = utils.utcToLocal(gistData[i]['updated_at'])
          obj['hide'] = false
          Gists.addNode(obj)
        }
      }
    

      const NewBlog = addCollection('Newblog');
      try {
        const {newblog} = await collectFn('newblog', `https://api.github.com/gists/${gistData[0].id}`)
        // console.log(newblog)

        for (let key in newblog.files) {
          let data = {}
          data['title'] = key
          data['content'] = markdownit.render(newblog.files[key]['content'])
          data['description'] = newblog['description']
          data['createTime'] = utils.utcToLocal(newblog['created_at'])
          data['updateTime'] = utils.utcToLocal(newblog['updated_at'])
          NewBlog.addNode(data)
        }
      }catch (err) {

      }
    }catch(err) {

    }

    const Projects = addCollection('Projects');
    try {
      const {projectData} = await collectFn('projectData', 'https://api.github.com/users/GitHub-Laziji/repos')

      for (let i = 0; i < projectData.length; i++) {
        let item = projectData[i]
        let data = {}
        data.id = item['id']
        data.name = item['name']
        data.url = item['html_url']
        data.description = item['description']
        data.stargazersCount = item['stargazers_count']
        data.watchersCount = item['watchers_count']
        data.forksCount = item['forks_count']
        data.language = item['language']
        data.license = item['license'] ? item['license']['spdx_id'] : null
        data.createTime = utils.utcToLocal(item['created_at'])
        data.updateTime = utils.utcToLocal(item['updated_at'])
        data.hide = false
        Projects.addNode(data)
      }
    }catch (err) {

    }
    

    const Followers = addCollection('followers')
    try {
      const {followersData} = await collectFn('followersData','https://api.github.com/users/GitHub-Laziji/followers')

      for (let i = 0; i < followersData.length; i++) {
          let data = {}
          data.name = followersData[i]['login']
          data.avatarUrl = followersData[i]['avatar_url']
          data.htmlUrl = followersData[i]['html_url']
          Followers.addNode(data)
      }
    }catch (err) {

    }

    const Post = addCollection('post')
    const {postData} = await collectFn('postData', 'http://jsonplaceholder.typicode.com/posts')

    Post.addNode(postData)

  })
}


async function collectFn(name, url){
  try {
    const { data } = await axios.get(url)
    // console.log(data)
    return Promise.resolve({[name]: data})
  }catch(err){
    console.error('collectFn error:',err.message)
  }
  
}