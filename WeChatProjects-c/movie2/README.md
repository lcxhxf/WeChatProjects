- posion-toast
  1. 首先确定用户的定位有没有开启
  2. 把组件从page里分离出来
  3. 如何做三角形，使用定位 before
  4. 叉叉关闭功能用isPositionPermitted控制

1. 大公司的大团体协作，我们正在模拟
  组件化
  比页面小一点，比view大一点
  独立的功能块
  
  页面->组件 1：n

2. 数据在页面中，传给组件
<component-name pics="{{pics}}">