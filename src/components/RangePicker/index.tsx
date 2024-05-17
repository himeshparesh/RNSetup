import {Resource} from '@root/res';
import appStyles from '@root/res/appStyles';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Slider from 'rn-range-slider';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {currencyWiseAmount, getLocalDataByKey} from '@root/utility/utility';
import {keys} from '@root/res/global';
import {Constants} from '@root/utility/Constants';

type RangePickerProps = {
  min: number;
  max: number;
  defaultLow: number;
  defaultHigh: number;
  low: number;
  high: number;
  selectedValue: (low: number, high: number) => void;
};

export const RangePicker: React.FC<RangePickerProps> = props => {
  const {t} = useTranslation();
  const {defaultLow = 50, defaultHigh = 100} = props;
  const [low, setLow] = useState<number>(props?.low);
  const [high, setHigh] = useState<number>(props?.high);
  const [min, setMin] = useState<number>(props.min);
  const [max, setMax] = useState<number>(props.max);
  const [currencyCode, setCurrencyCode] = useState<string>('');

  useEffect(() => {
    checkCurrency();
  }, []);

  const checkCurrency = async () => {
    let currencyCode = await getLocalDataByKey(keys.KEY_CURRENCY);
    if (!currencyCode) currencyCode = Constants.DEFAULT_CURRENCY_CODE_USD;
    const {currency, amount} = currencyWiseAmount(currencyCode, 0);
    setCurrencyCode(currency);
  };

  const handleValueChange = useCallback(
    (lowValue: number, highValue: number) => {
      setLow(lowValue);
      setHigh(highValue);
      props.selectedValue(lowValue, highValue);
    },
    [],
  );

  return (
    <View>
      <View style={styles.rawStyle}>
        <Text style={appStyles.titleTxt}>{t('text.price')}</Text>
        <Text style={styles.priceTxt}>
          {`${currencyCode} ${low} - ${currencyCode} ${high}`}
        </Text>
      </View>
      <Slider
        min={min}
        max={max}
        step={1}
        disableRange={false}
        floatingLabel={false}
        low={low}
        high={high}
        renderThumb={() => <View style={styles.thumbView} />}
        renderRail={() => <View style={styles.railView} />}
        renderRailSelected={() => <View style={styles.railSelected} />}
        onValueChanged={handleValueChange}
      />
    </View>
  );
};
