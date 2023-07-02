<template>
  <div class="mob-nav-wrapper">
    <nav
      ref="navNode"
      class="mob-nav">
      <ul class="container mob-nav__container">
        <li
          v-for="{name, icon, path} in sections"
          :key="name"
          class="mob-nav__item">
          <RouterLink
            :to="{name: path}"
            active-class="active"
            class="mob-nav__link">
            <span class="mob-nav__icon">
              <component :is="icon"></component>
            </span>
            <span class="mob-nav__name">
              {{ name }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconIPO from '@/components/icons/IconIPO.vue';
import IconIdeas from '@/components/icons/IconIdeas.vue';
import IconPortfolio from '@/components/icons/IconPortfolio.vue';
import IconQuotes from '@/components/icons/IconQuotes.vue';

const sections = [
  {
    name: 'Quotes',
    icon: IconQuotes,
    path: 'home'
  },
  {
    name: 'Portfolio',
    icon: IconPortfolio,
    path: 'portfolio'
  },
  {
    name: 'Ideas',
    icon: IconIdeas,
    path: 'portfolio'
  },
  {
    name: 'IPO',
    icon: IconIPO,
    path: 'portfolio'
  },
  {
    name: 'Menu',
    icon: IconMenu,
    path: 'portfolio'
  },
];

const navNode = ref();
const navHeight = ref();

onMounted(() => {
  navHeight.value = `${ navNode.value.clientHeight }px`;
});
</script>

<style lang="scss" scoped>
.mob-nav-wrapper {
  margin-bottom: v-bind(navHeight);
}
</style>