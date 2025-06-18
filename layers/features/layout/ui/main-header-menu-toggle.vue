<script lang="ts" setup>
import { useHeader } from "~/layers/features/layout"

const { isMenuOpen, toggleMenu } = useHeader()
</script>

<template>
  <ui-icon-button
    class="menu-toggle group"
    rounded
    variant="ghost"
    color="secondary"
    icon-class="text-xl"
    icon-name="lucide:mail"
    :class="{ 'menu-toggle--shown': isMenuOpen }"
    :label="$t('labels.menu')"
    @click="toggleMenu"
  >
    <span class="menu-toggle__icon">
      <span class="menu-toggle__line menu-toggle__line--1"></span>
      <span class="menu-toggle__line menu-toggle__line--2"></span>
      <span class="menu-toggle__line menu-toggle__line--3"></span>
    </span>
  </ui-icon-button>
</template>

<style lang="css">
.menu-toggle {
  @apply lg:hidden;

  &__icon {
    @apply block w-5;
  }

  &__line {
    @apply relative block h-0.5 w-full rounded bg-gray-600 transition-colors ease-in-out group-hover:bg-gray-900;

    & + .menu-toggle__line {
      @apply mt-1;
    }

    &--1 {
      animation: ease 0.3s top-2 forwards;
    }

    &--2 {
      animation: ease 0.3s middle-2 forwards;
    }

    &--3 {
      animation: ease 0.3s bottom-2 forwards;
    }
  }

  &--shown {
    .menu-toggle__line--1 {
      animation: ease 0.3s top forwards;
    }

    .menu-toggle__line--2 {
      animation: ease 0.3s middle forwards;
    }

    .menu-toggle__line--3 {
      animation: ease 0.3s bottom forwards;
    }
  }
}

@keyframes top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 6px;
    transform: rotate(0);
  }
  100% {
    top: 6px;
    transform: rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
    top: 6px;
    transform: rotate(45deg);
  }
  50% {
    top: 6px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes middle {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes middle-2 {
  0% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 6px;
    transform: rotate(0);
  }
  100% {
    bottom: 6px;
    transform: rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
    bottom: 6px;
    transform: rotate(135deg);
  }
  50% {
    bottom: 6px;
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}
</style>
