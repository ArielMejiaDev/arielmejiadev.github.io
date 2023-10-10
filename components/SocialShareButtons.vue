<script setup>
defineProps({
  title: String,
  description: String,
  url: String,
  twitterUsername: String
});
</script>

<template>
  <div class="flex items-center justify-start space-x-4 my-10">
    <!-- Twitter (url, text, @mention) -->
    <a target="_blank" class="share-btn twitter" :href="`https://twitter.com/share?url=${url}&text=${description} via=${twitterUsername}`">
      Twitter
    </a>

    <!-- Facebook (url) -->
    <a target="_blank" class="share-btn facebook" :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`">
      Facebook
    </a>

    <!-- Reddit (url, title) -->
    <a target="_blank" class="share-btn reddit" :href="`https://reddit.com/submit?url=${url}&title=${title}`">
      Reddit
    </a>

    <!-- Hacker News (url, title) -->
    <a target="_blank" class="share-btn hackernews" :href="`https://news.ycombinator.com/submitlink?u=${url}&t=${title}`">
      Hacker News
    </a>

    <!-- LinkedIn (url, title, summary, source url) -->
    <a target="_blank" class="share-btn linkedin" :href="`https://www.linkedin.com/shareArticle?url=${url}&title=${title}&summary=${description}&source=${url}`">
      LinkedIn
    </a>

    <!-- Email (subject, body) -->
    <a target="_blank" class="share-btn email" :href="`mailto:?subject=${title}&body=${description}`">
      Email
    </a>
  </div>
</template>

<style scoped>
.share-btn {
  display: inline-block;
  color: #ffffff;
  border: none;
  padding: 0.1em 0.6em;
  outline: none;
  text-align: center;
  font-size: 0.9em;
  margin: 0 0.2em;
}

.share-btn:focus,
.share-btn:hover {
  text-decoration: none;
  opacity: 0.8;
}

.share-btn:active {
  color: #e2e2e2;
}

.share-btn.twitter     { background: #55acee; }
.share-btn.google-plus { background: #dd4b39; }
.share-btn.facebook    { background: #3B5998; }
.share-btn.stumbleupon { background: #EB4823; }
.share-btn.reddit      { background: #ff5700; }
.share-btn.hackernews  { background: #ff6600; }
.share-btn.linkedin    { background: #4875B4; }
.share-btn.email       { background: #444444; }
</style>>