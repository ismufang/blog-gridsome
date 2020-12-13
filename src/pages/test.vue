<template>
    <div>
        <h1>test Page</h1>
        <!-- {{$page.posts.edges}} -->
        <div v-for="(post,index) in $page.posts.edges" :key="post.node.id">{{index+1}}: {{post.node.title}}</div>
    </div>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id,
        title
      }
	}
  }
}
</page-query>

<script>
    export default {
        name: 'TestPage'
    }
</script>

<style lang="scss" scoped>

</style>