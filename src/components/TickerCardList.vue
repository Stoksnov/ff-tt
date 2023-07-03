<template>
  <TickerCard
    v-for="ticker in tickerList"
    :key="ticker.ticker"
    :ticker="ticker.ticker"
    :price="ticker.price"
    :companyName="ticker.companyName"
    :changePriceInPoints="ticker.changePriceInPoints"
    :changePriceInPercents="ticker.changePriceInPercents"/>
</template>

<script setup lang="ts">
import {computed, reactive, watch} from 'vue';
import TickerCard from '@/components/TickerCard.vue';
import {useWebSocket} from '@/composables/webSocket';
import type {ITicker, ITickerResponse, ITickers} from '@/types';

const tickers = reactive<ITickers | {}>({});
const tickerList = computed(() => {
  return Object.values(tickers);
});

const tickersToWatchChanges = ['RSTI', 'GAZP', 'MRKZ', 'RUAL', 'HYDR', 'MRKS', 'SBER', 'FEES', 'TGKA', 'VTBR', 'ANH.US', 'VICL.US', 'BURG.US', 'NBL.US', 'YETI.US', 'WSFS.US', 'NIO.US', 'DXC.US', 'MIC.US', 'HSBC.US', 'EXPN.EU', 'GSK.EU', 'SHP.EU', 'MAN.EU', 'DB1.EU', 'MUV2.EU', 'TATE.EU', 'KGF.EU', 'MGGT.EU', 'SGGD.EU'];

const {isOpen, send, messageEvent} = useWebSocket('wss://wss.tradernet.ru');

watch(() => isOpen.value, (isOpen) => {
  if (isOpen) {
    send(JSON.stringify(['quotes', tickersToWatchChanges]));
  }
});

const dictionary = {
  ticker: 'c',
  price: 'ltp',
  companyName: 'name',
  changePriceInPoints: 'chg',
  changePriceInPercents: 'pcp',
};
const serverNames = Object.values(dictionary);
const clientNames = Object.keys(dictionary);

watch(() => messageEvent.value, (response) => {
  const message = JSON.parse(response.data);

  if (message[0] !== 'q') {
    return;
  }

  const tickerData: ITickerResponse = message[1];

  for (const item in tickerData) {
    const index = serverNames.indexOf(item);
    if (serverNames.includes(item)) {
      if (!tickers[tickerData.c]) {
        tickers[tickerData.c] = {};
      }
      tickers[tickerData.c][clientNames[index]] = tickerData[item];
    }
  }
});
</script>

