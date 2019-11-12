import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import ElementUI from 'element-ui';
import config from "../../../moBox/src/common/config";
class Base extends Vue{
  static BASE_URL = config.BASE_URL; //基础请求路径
  static TIME_OUT=5000;               //响应时间
  static HEADERS = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
  constructor() {
    super();
  }

}
