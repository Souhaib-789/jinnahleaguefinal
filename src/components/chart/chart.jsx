import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

export const DemoPie = (props) => {
    
    const config = {
      appendPadding: 10,
      data: props?.data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.9,
      label: {
        type: 'inner',
        offset: '-30%',
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: 'center',
        },
      },
      interactions: [
        {
          type: 'element-active',
        },
      ],
    };
    return <Pie {...config} />;
  };