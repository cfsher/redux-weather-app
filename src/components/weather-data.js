import React, { Component } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export const Chart = (props) => {
  const handle = props.units === '℉' ? props.data.map(value => (value - 273) * 9/5 + 32) : props.data;
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(handle)} {props.units}</div>
    </div>
  );
};
