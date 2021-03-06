# Ablock总体评估

针对前期讨论与**Ablock网站开发需求文档**进行Ablock预估


## 网站开发需求

- 采用响应式网站设计
- 采用React对整个网站页面进行搭建，做到页面模块化，模块即拿即用；易维护，能通过参数进行页面数据的改变；针对未来动态页面设计留出必要的空间
- 采用css3、animation等效果使界面美观、大气
- 网站内容根据**网站网页素材**进行搭建
- 网站内容至少包括但不限于**创作乐园**、**产品介绍**、**公司介绍**
- 时间预估2019.07.04-2019.07.14

## 测评系统

测评系统存在问题
- 存在许多已知或者未知bug，如手机注册未发送验证码、邮箱注册接口出错等
- 测评系统采用spring-web方式，系统内部耦合度略高
- 测评系统使用的图片的大小太大，并且未用缓存、异步加载等机制导致性能降低
- 对测评系统进行整体的代码重构或重新做一个新版测评系统
- 时间预估20天

## 服务器问题

- 重新配置服务器
- 将多域名配置至服务器
- 服务器内部服务进行优化

## 图形化界面开发

图形化界面预估存在难点
- **pc平板与硬件通信问题**
- 将**模块转化为c或python代码**，并支持**实时**查看
- 图形化界面开发中每个模块的工作量问题
- 图形化界面开发周期至少预估**八个月**不间断工作，并且能全身心投入其中
