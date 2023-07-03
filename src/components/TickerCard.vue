<template>
  <div class="ticker-card">
    <div class="ticker-card__col">
      <div class="ticker-card__row">
        <div
          v-if="logo"
          class="ticker-card__logo">
          {{ logo }}</div>
        <div class="ticker-card__ticker">{{ ticker }}</div>
      </div>
      <div class="ticker-card__row">
        <div class="ticker-card__name">{{ companyName }}</div>
      </div>
    </div>
    <div class="ticker-card__col ticker-card__col_items-right">
      <div class="ticker-card__row">
        <div
          class="ticker-card__ltp"
          :class="priceClasses.badge">
          <span v-if="splittedPrice[0]" >{{splittedPrice[0]}}</span>
          <span :class="priceClasses.text">{{splittedPrice[1]}}</span>
        </div>
      </div>
      <div class="ticker-card__row">
        <div
          class="ticker-card__changes"
          :class="priceChangesClasses">
          {{ formatNumber(changePriceInPoints) }}
        </div>
        <div
          class="ticker-card__changes"
          :class="priceChangesClasses">
          {{ formatNumber(changePriceInPercents) }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref, toRefs, watch} from 'vue';

interface IProps {
    logo?: string
    ticker: string
    price: number | null
    companyName: string
    changePriceInPoints: number | null
    changePriceInPercents: number | null
    minPriceStep: number | null
}

const props = defineProps<IProps>();

const {
  logo,
  ticker,
  price,
  companyName,
  changePriceInPoints,
  changePriceInPercents,
  minPriceStep,
} = toRefs(props);

const priceClasses = ref({
  badge: '',
  text: ''
});
const splittedPrice = ref([]);

watch(
  () => props.price,
  (newValue: number, oldValue: number) => {
    updatePriceClasses(newValue > oldValue);
    splitPrice(newValue, oldValue);
  }
);

const formatNumber = (number: number): string => {
  if (isNaN(number)) {
    number = 0;
  }

  const roundedNumber = Math.round(number * 100) / 100;
  return roundedNumber.toFixed(2);
};

const splitPrice = (price: number, prevPrice: number) => {
  let newFormattedPrice = formatNumber(price);
  let index = null;
  for (let i = 0; i < newFormattedPrice.length; i++) {
    if (newFormattedPrice[i] === prevPrice.toString()[i]) {
      continue;
    }
    index = i;
    break;
  }

  splittedPrice.value = [newFormattedPrice.slice(0,index), newFormattedPrice.slice(index)];
};

const updatePriceClasses = (isPositiveMove: boolean): void => {
  priceClasses.value = {
    badge: isPositiveMove ? 'ticker-card__ltp_green' : 'ticker-card__ltp_red',
    text: '',
  };

  setTimeout(() => {
    priceClasses.value = {
      badge: '',
      text: isPositiveMove ? 'text-green' : 'text-red',
    };
  }, 2000);
};

const priceChangesClasses = computed(() => {
  if (changePriceInPoints.value === 0) {
    return '';
  }
  return changePriceInPoints.value > 0 ? 'text-green' : 'text-red';
});

onMounted(() => {
  splittedPrice.value[1] = formatNumber(price.value);
});
</script>
