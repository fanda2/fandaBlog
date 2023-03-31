<template>
<div class="bubble_body">
	<div class="bubble_container">
			<div class="bubble">
			</div>
			<div class="buuule_shadow">
			</div>
		</div>
</div>
</template>

<script>
export default {
    name:"Bubble",

}
</script>

<style>
.bubble_body{
   width: 98%;
   min-width: 250px;
    height: 300px;
    margin: 10px auto;
    text-align: center;
	display: flex;
	justify-content: center;
	background: linear-gradient(150deg,#d299c2,#fef9d7);
	overflow: hidden;
	border-radius: 10px;
    box-shadow: 4px 4px 4px #ccc,-3px -3px 4px rgb(238, 238, 238);
}
.bubble_container{
	width: 100px;
	height: 100px;
	position: relative;
	margin-top: 100px;
}
.bubble{
	width: 100%;
	height: 100%;
	background:radial-gradient(circle at 75% 30%,#fff 5px ,#ff21c0 8%,#5b5b5b 60%,#ff21c0 100%);
	border-radius: 50%;
	box-shadow: inset 0 0 20px #fff,inset 10px 0 46px #eaf5fc,
	inset 80px 0 60px #efced6,inset -20px -60px 100px #f9f6de,
	inset 0 50px 140px #f9f5de,0 0  90px #fff;
	/* 执行动画 */
	animation: bubble 4s ease-in-out infinite;
}
.buuule_shadow{
	background-color:rgba(0,0,0,0.15);
	width: 100px;
	height: 40px;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	margin-left: -50px;
	bottom: -80px;
	/* 模糊 */
	filter: blur(1px);
	animation: shadow 4s ease-in-out reverse infinite;
}
@keyframes bubble{
	0%,100%{
		transform: translateY(0);
	}
	50%{
		transform: translateY(-80px);
	}
}
@keyframes shadow{
   0%,100%{
		transform:scale(0.5);
	}
	50%{
		transform: scale(1);
	}
}
</style>