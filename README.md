这是我的个人主页源码，基于React构建。  

页面数据放在GitHub，评论系统使用Valine，数据库基于LeanCloud。

计划未来基于LeanCloud做一个小型后台来管理数据，把个人页面的数据也放到LeanCooud。  

`Valine`和`LeanCloud`没有使用`npm`一起打包，而采用了在页面中通过`CDN`引入的方式，这样做的目的是减小`bundle.js`的大小，由不同的服务器分担流量，加快页面加载速度。  

我的主页: [https://yanzhenjie.com](https://yanzhenjie.com)  
Valine: [https://valine.js.org](https://valine.js.org)  
LeanCloud: [https://leancloud.cn](https://leancloud.cn)  

## License
```text
Copyright 2019 Zhenjie Yan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```