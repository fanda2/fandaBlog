<template>
  <div class="qrcode" ref="qrCodeUrl"></div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
    props:['content'],
    data() {
        return {
            //二维码需要的内容
            title:this.content
        }
    },
    methods: {
    creatQrCode() {
        new QRCode(this.$refs.qrCodeUrl, {
            text: this.title, // 需要转换为二维码的内容
            width: 150,
            height: 150,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        })
    },
},
mounted() {
    this.creatQrCode();
},
}
</script>

<style scoped>

</style>