<template>
  <div class="abstract-item" @click="$router.push(item.path)">
    <reco-icon icon="reco-sticky" />
    <div class="info">
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>

      <div class="abstract" v-html="item.excerpt"></div>
      <PageInfo class="mark" :pageInfo="item" :currentTag="currentTag">
      </PageInfo>
    </div>
  </div>
</template>

<script>
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default {
  components: { PageInfo, RecoIcon },
  props: ['item', 'currentPage', 'currentTag']
}
</script>

<style lang="stylus" scoped>
.abstract-item {
  position: relative;
  margin: 0 auto 20px;
  padding: 16px 20px;
  width: 90%;
  overflow: hidden;
  border-radius: $borderRadius;
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition: all 0.3s;
  background-color: var(--background-color);
  cursor: pointer;
  display: flex;

  > * {
    pointer-events: auto;
  }

  /* 修改 */
  .abstract {
    margin: 0 1rem;
  }

  .mark {
    margin: 0 2rem;
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .reco-sticky {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    color: $accentColor;
    font-size: 2.4rem;
  }

  &:hover {
    box-shadow: var(--box-shadow-hover);
  }

  .title {
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    margin: 0 2rem;

    a {
      color: var(--text-color);
    }

    .reco-lock {
      font-size: 1.28rem;
      color: $accentColor;
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: 0.3s ease-in-out;
    }

    &:hover a {
      color: $accentColor;
    }

    &:hover:after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }

  .tags {
    .tag-item {
      &.active {
        color: $accentColor;
      }

      &:hover {
        color: $accentColor;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .tags {
    display: block;
    margin-top: 1rem;
    margin-left: 0 !important;
  }
}
</style>
