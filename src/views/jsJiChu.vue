<template>
  <div>
  点击  AA BB CC DD切换
    <!-- <input v-model="bb" /> -->
    <div>
      <span style="margin-right:100px;" @click="bb(1)">AAAA</span>
      <span style="margin-right:100px;" @click="bb(2)">BBBB</span>
      <span style="margin-right:100px;" @click="bb(3)">CCCC</span>
      <span style="margin-right:100px;" @click="bb(4)">DDDD</span>
      <div v-show="flagA==1" id="mainA" ref="chartA" style="width:60rem;height:30rem;"></div>
      <div v-show="flagA==2" id="mainB" ref="chartB" style="width:60rem;height:30rem;"></div>
      <div v-show="flagA==3" id="mainC" ref="chartC" style="width:60rem;height:30rem;"></div>
      <div v-show="flagA==4" id="mainD" ref="chartD" style="width:60rem;height:30rem;"></div>

      <span style="margin-right:100px;" @click="bb22(1)">AAAA2222222</span>
      <span style="margin-right:100px;" @click="bb22(2)">BBBB22222222</span>
      <span style="margin-right:100px;" @click="bb22(3)">CCCC2222222222</span>
      <span style="margin-right:100px;" @click="bb22(4)">DDDD222222222</span>
      <span style="margin-right:100px;" @click="bb22(5)">EEEEE222222222</span>

      <div v-show="flagA2==1" id="mainA2" ref="chartA2" style="width:60rem;height:30rem;"></div>
      <div v-show="flagA2==2" id="mainB2" ref="chartB2" style="width:60rem;height:30rem;"></div>
      <div v-show="flagA2==3" id="mainC2" ref="chartC2" style="width:60rem;height:30rem;"></div>
      <div v-show="flagA2==4" id="mainD2" ref="chartD2" style="width:60rem;height:30rem;"></div>
      <div v-show="flagA2==5" id="mainE2" ref="chartE2" style="width:60rem;height:30rem;"></div>

      <div @click="aa(1)">新签约人数</div>
      <div @click="aa(2)">取消签约人数</div>
      <div @click="aa(3)">净值签约人数</div>
      <div @click="aa(4)">累计签约人数</div>
    </div>

    <!-- <div v-show="flag==1" id="main1" ref="chart1" style="width:60rem;height:30rem;"></div>
    <div v-show="flag==2" id="main2" ref="chart2" style="width:60rem;height:30rem;"></div>
     <div v-show="flag==3" id="main3" ref="chart3" style="width:60rem;height:30rem;"></div>

    <div v-show="flag==4" id="main4" ref="chart4" style="width:60rem;height:30rem;"></div>-->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      aaa:'',
      flagA: 1,
      BBflag: false,
      CCflag: false,
      DDflag: false,
      flagA2: 1,
      BB2flag: false,
      CC2flag: false,
      DD2flag: false,
      EE2flag: false,
      flag: 1,
      oneState: false,
      twoState: false,
      ThreeState: false,
      fourState: false,
      // bb: [5, 20, 36, 10, 10, 20],
      optionA: {
         title: {
        text: '天气情况统计',
        subtext: '虚构数据',
        left: 'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        top: 10,
        left: 'center',
        data: ['西凉', '益州','兖州','荆州','幽州']
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {
                    value:1548,
                    name: '幽州'
                   
                },
                {value:535, name: '荆州'},
                {value:510, name: '兖州'},
                {value:634, name: '益州'},
                {value:735, name: '西凉'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
      },
      optionB: {
        title: {
          text: "微信银行新绑卡人数BBB",
          x: "left",
          y: "top",
          textAlign: "left"
        },

        xAxis: {
          type: "category",
          data: [
            "2019-04-20",
            "2019-04-21",
            "2019-04-22",
            "2019-04-23",
            "2019-04-24",
            "2019-04-25"
          ]
        },
        yAxis: {
          type: "value",
          min: 10,
          max: 60
        },
        series: [
          {
            data: [50, 50, 50, 50, 50, 50],
            type: "line",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 16
                  }
                }
              }
            }
          }
        ]
      },
      optionC: {
        title: {
          text: "微信银行新绑卡人数3CCC",
          x: "left",
          y: "top",
          textAlign: "left"
        },

        xAxis: {
          type: "category",
          data: [
            "2019-04-20",
            "2019-04-21",
            "2019-04-22",
            "2019-04-23",
            "2019-04-24",
            "2019-04-25"
          ]
        },
        yAxis: {
          type: "value",
          min: 10,
          max: 60
        },
        series: [
          {
            data: [50, 50, 50, 50, 50, 50],
            type: "line",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 16
                  }
                }
              }
            }
          }
        ]
      },
      optionD: {
        title: {
          text: "微信银行新绑卡人数3DDD",
          x: "left",
          y: "top",
          textAlign: "left"
        },

        xAxis: {
          type: "category",
          data: [
            "2019-04-20",
            "2019-04-21",
            "2019-04-22",
            "2019-04-23",
            "2019-04-24",
            "2019-04-25"
          ]
        },
        yAxis: {
          type: "value",
          min: 10,
          max: 60
        },
        series: [
          {
            data: [50, 50, 50, 50, 50, 50],
            type: "line",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 16
                  }
                }
              }
            }
          }
        ]
      },
      optionA2: {
             title : {
                text:'微信银行签约用户分布AAAAAAAAAAAA2',
                x:'center',
                y:'top',
                textAlign:'left'
            },

            xAxis: {
                type: 'category',
                data: ['男', '女']
            },
            yAxis: {
                type: 'value',
                min:0,
                max:2500000
            },
            series: [{
                data: [2200000, 1400000],
                type: 'bar',
                barWidth:80,
                color:'blue',
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            }
                        }
                    }
                }
            }]
      },
      optionB2: {
      title : {
                text:'微信银行签约用户分布BBBBBBBBBBBBBB2',
                x:'center',
                y:'top',
                textAlign:'left'
            },

            xAxis: {
                type: 'category',
                data: ['男', '女']
            },
            yAxis: {
                type: 'value',
                min:0,
                max:2500000
            },
            series: [{
                data: [2200000, 1400000],
                type: 'bar',
                barWidth:80,
                color:'blue',
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            }
                        }
                    }
                }
            }]
      },
      optionC2: {
        title : {
                text:'微信银行签约用户分布cccccccccccccc2',
                x:'center',
                y:'top',
                textAlign:'left'
            },

            xAxis: {
                type: 'category',
                data: ['男', '女']
            },
            yAxis: {
                type: 'value',
                min:0,
                max:2500000
            },
            series: [{
                data: [2200000, 1400000],
                type: 'bar',
                barWidth:80,
                color:'blue',
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            }
                        }
                    }
                }
            }]
      },
      optionD2: {
      title : {
                text:'微信银行签约用户分布dddddddddddddd2',
                x:'center',
                y:'top',
                textAlign:'left'
            },

            xAxis: {
                type: 'category',
                data: ['男', '女']
            },
            yAxis: {
                type: 'value',
                min:0,
                max:2500000
            },
            series: [{
                data: [2200000, 1400000],
                type: 'bar',
                barWidth:80,
                color:'blue',
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            }
                        }
                    }
                }
            }]
      },
      optionE2: {
       title : {
                text:'微信银行签约用户分布eeeeeeeeeeeeeeeee2',
                x:'center',
                y:'top',
                textAlign:'left'
            },

            xAxis: {
                type: 'category',
                data: ['男', '女']
            },
            yAxis: {
                type: 'value',
                min:0,
                max:2500000
            },
            series: [{
                data: [2200000, 1400000],
                type: 'bar',
                barWidth:80,
                color:'blue',
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            }
                        }
                    }
                }
            }]
      }
      // option1: {
      //   title: {
      //     text: "签约用户统计"
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      //   },
      //   grid: {
      //     left: "3%",
      //     right: "4%",
      //     bottom: "3%",
      //     containLabel: true
      //   },
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {}
      //     }
      //   },
      //   xAxis: {
      //     type: "category",
      //     boundaryGap: false,
      //     data: [
      //       "2019-0420",
      //       "2019-0421",
      //       "2019-0422",
      //       "2019-0423",
      //       "2019-0424",
      //       "2019-0425",
      //       "2019-0426"
      //     ]
      //   },
      //   yAxis: {
      //     type: "value"
      //   },
      //   series: [
      //     {
      //       name: "邮件营销",
      //       type: "line",
      //       stack: "总量",
      //       data: [120, 132, 101, 134, 90, 230, 210],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },

      //   ]
      // },
      //  option2: {
      //   title: {
      //     text: "签约用户统计2"
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      //   },
      //   grid: {
      //     left: "3%",
      //     right: "4%",
      //     bottom: "3%",
      //     containLabel: true
      //   },
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {}
      //     }
      //   },
      //   xAxis: {
      //     type: "category",
      //     boundaryGap: false,
      //     data: [
      //       "2019-0420",
      //       "2019-0421",
      //       "2019-0422",
      //       "2019-0423",
      //       "2019-0424",
      //       "2019-0425",
      //       "2019-0426"
      //     ]
      //   },
      //   yAxis: {
      //     type: "value"
      //   },
      //   series: [
      //     {
      //       name: "邮件营销",
      //       type: "line",
      //       stack: "总量",
      //       data: [120, 132, 101, 134, 90, 230, 210],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "联盟广告",
      //       type: "line",
      //       stack: "总量",
      //       data: [220, 182, 191, 234, 290, 330, 310],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "视频广告",
      //       type: "line",
      //       stack: "总量",
      //       data: [150, 232, 201, 154, 190, 330, 410],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "直接访问",
      //       type: "line",
      //       stack: "总量",
      //       data: [320, 332, 301, 334, 390, 330, 320],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "搜索引擎",
      //       type: "line",
      //       stack: "总量",
      //       data: [820, 932, 901, 934, 1290, 1330, 1320],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     }
      //   ]
      // },
      //  option3: {
      //   title: {
      //     text: "签约用户统计33333333"
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      //   },
      //   grid: {
      //     left: "3%",
      //     right: "4%",
      //     bottom: "3%",
      //     containLabel: true
      //   },
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {}
      //     }
      //   },
      //   xAxis: {
      //     type: "category",
      //     boundaryGap: false,
      //     data: [
      //       "2019-0420",
      //       "2019-0421",
      //       "2019-0422",
      //       "2019-0423",
      //       "2019-0424",
      //       "2019-0425",
      //       "2019-0426"
      //     ]
      //   },
      //   yAxis: {
      //     type: "value"
      //   },
      //   series: [
      //     {
      //       name: "邮件营销",
      //       type: "line",
      //       stack: "总量",
      //       data: [120, 132, 101, 134, 90, 230, 210],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "联盟广告",
      //       type: "line",
      //       stack: "总量",
      //       data: [220, 182, 191, 234, 290, 330, 310],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "视频广告",
      //       type: "line",
      //       stack: "总量",
      //       data: [150, 232, 201, 154, 190, 330, 410],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "直接访问",
      //       type: "line",
      //       stack: "总量",
      //       data: [320, 332, 301, 334, 390, 330, 320],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "搜索引擎",
      //       type: "line",
      //       stack: "总量",
      //       data: [820, 932, 901, 934, 1290, 1330, 1320],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     }
      //   ]
      // },
      //  option4: {
      //   title: {
      //     text: "签约用户统计4"
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      //   },
      //   grid: {
      //     left: "3%",
      //     right: "4%",
      //     bottom: "3%",
      //     containLabel: true
      //   },
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {}
      //     }
      //   },
      //   xAxis: {
      //     type: "category",
      //     boundaryGap: false,
      //     data: [
      //       "2019-0420",
      //       "2019-0421",
      //       "2019-0422",
      //       "2019-0423",
      //       "2019-0424",
      //       "2019-0425",
      //       "2019-0426"
      //     ]
      //   },
      //   yAxis: {
      //     type: "value"
      //   },
      //   series: [
      //     {
      //       name: "邮件营销",
      //       type: "line",
      //       stack: "总量",
      //       data: [120, 132, 101, 134, 90, 230, 210],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "联盟广告",
      //       type: "line",
      //       stack: "总量",
      //       data: [220, 182, 191, 234, 290, 330, 310],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "视频广告",
      //       type: "line",
      //       stack: "总量",
      //       data: [150, 232, 201, 154, 190, 330, 410],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "直接访问",
      //       type: "line",
      //       stack: "总量",
      //       data: [320, 332, 301, 334, 390, 330, 320],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       name: "搜索引擎",
      //       type: "line",
      //       stack: "总量",
      //       data: [820, 932, 901, 934, 1290, 1330, 1320],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "top",
      //             textStyle: {
      //               color: "black",
      //               fontSize: 12
      //             }
      //           }
      //         }
      //       }
      //     }
      //   ]
      // }
    };
  },
  watch:{
   aaa(){
     alert(1)
      this.aaa=111
   }

  },
  mounted() {
    let a = [{}, {}];
    this.$echarts.init(this.$refs.chartA).setOption(this.optionA);
    this.$echarts.init(this.$refs.chartA2).setOption(this.optionA2);
  },
  methods: {
    aa(e) {
      console.log(e);
      if (e == 1) {
        this.flag = 1;
      } else if (e == 2) {
        this.flag = 2;
        if (this.twoState == false) {
          this.twoState = true;
          this.$echarts.init(this.$refs.chart2).setOption(this.option2);
        }
        this.flag = 2;
      } else if (e == 3) {
        if (this.threeState == false) {
          console.log(1000);
          this.threeState = true;
          this.$echarts.init(this.$refs.chart3).setOption(this.option3);
        }
        this.flag = 3;
      } else if (e == 4) {
        this.flag = 4;
        if (this.fourState == false) {
          this.fourState = true;
          this.$echarts.init(this.$refs.chart4).setOption(this.option4);
        }
      }
    },
    bb(e) {
      console.log(e);
      if (e == 1) {
        this.flagA = 1;
      } else if (e == 2) {
        if (this.BBflag == false) {
          this.BBflag = true;
          this.$echarts.init(this.$refs.chartB).setOption(this.optionB);
        }
        this.flagA = 2;
      } else if (e == 3) {
        if (this.CCflag == false) {
          this.CCflag = true;
          this.$echarts.init(this.$refs.chartC).setOption(this.optionC);
        }
        this.flagA = 3;
      } else if (e == 4) {
        if (this.DDflag == false) {
          this.DDflag = true;
          this.$echarts.init(this.$refs.chartD).setOption(this.optionD);
        }
        this.flagA = 4;
      }
    },
    bb22(e){
        console.log(e);
      if (e == 1) {
        this.flagA2 = 1;
      } else if (e == 2) {
        if (this.BB2flag == false) {
          this.BB2flag = true;
          this.$echarts.init(this.$refs.chartB2).setOption(this.optionB2);
        }
        this.flagA2 = 2;
      } else if (e == 3) {
        if (this.CC2flag == false) {
          this.CC2flag = true;
          this.$echarts.init(this.$refs.chartC2).setOption(this.optionC2);
        }
        this.flagA2 = 3;
      } else if (e == 4) {
        if (this.DD2flag == false) {
          this.DD2flag = true;
          this.$echarts.init(this.$refs.chartD2).setOption(this.optionD2);
        }
        this.flagA2 = 4;
      } else if (e == 5) {
        if (this.EE2flag == false) {
          this.EE2flag = true;
          this.$echarts.init(this.$refs.chartE2).setOption(this.optionE2);
        }
        this.flagA2 = 5;
      }
    }
  }
  //  beforeRouteLeave(to, from, next) {
  // console.log(to)
  //    to.meta.keepAlive = false;
  //    next();
  //  }

  // created(){
  //   window.location.href='www.baidu.com'
  //   try {
  //
  //     throw "Too big";
  //   }catch (e) {
  //     this.e=e
  //     console.log(e)
  //      console.log('catch')
  //   }finally {
  //
  //     console.log('finally')
  //   }
  // }
};
</script>

<style scoped>
</style>
