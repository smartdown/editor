<template>
  <div>
    <div
      id="smartdown-outer-container"
      class="smartdown-outer-container smartdown-theme-chat">
      <div
        class="smartdown-container"
        id="smartdown-output">
      </div>
    </div>
  </div>
</template>

<script>
/* global smartdown */
/* global SQ */
import {
  ref,
  watch,
  onMounted,
  nextTick,
} from 'vue';

export default {
  props: {
    title: String,
    initInput: String,
  },

  setup(props) {
    const html = ref('');

    const markdown = ref(props.initInput);

    async function smartdownToHTML(text) {
      const resultPromise = new Promise((resolve) => {
        const outputDiv = document.createElement('div');
        smartdown.setSmartdown(text, outputDiv, () => {
          const smartdownHTML = outputDiv.innerHTML;
          resolve(smartdownHTML);
        });
      });

      return resultPromise;
    }

    watch(SQ.cardToLoad, async () => {
      console.log('watch(SQ.cardToLoad', SQ.cardToLoad);
      if (SQ.cardToLoad.value) {
        const cardPath = `gallery/${SQ.cardToLoad.value}.md`;
        console.log('cardPath', cardPath);

        markdown.value = await (await fetch(cardPath)).text();

        html.value = await smartdownToHTML(markdown.value);
        await nextTick();
        const outputDiv = document.getElementById('smartdown-output');
        smartdown.setHome(markdown.value, outputDiv, async () => {
          smartdown.startAutoplay(outputDiv);
        });
      }
    });

    onMounted(async () => {
      html.value = await smartdownToHTML(markdown.value); // Is this necessary?

      await nextTick();
      const outputDiv = document.getElementById('smartdown-output');
      smartdown.setHome(markdown.value, outputDiv, async () => {
        smartdown.startAutoplay(outputDiv);
      });
    });

    return {
      markdown,
      html,
    };
  },
};
</script>
