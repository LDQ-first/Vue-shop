<template>
    <div @click.prevent="reppleClick" class="cov-button-ripple" ref="covButtonRipple">
        <slot></slot>
        <span class="cov-ripple" ref="covRipple" :class="{animate: animate}"></span>
    </div>
</template>

<script>
export default {
    props: {
        speed: {
            type: String,
            required: false
        },
        bg: {
            type: String,
            required: false
        }
    },
    data () {
        return {
            animate: false
        }
    },
    methods: {
        reppleClick (e) {
            if(this.animate) {
                return
            }
            this.animate = true
            const button = this.$refs.covButtonRipple
            const ripple = this.$refs.covRipple
            const timer = (this.speed * 1000 || 650) + 20 
            if (ripple) {
                const d = Math.max(button.offsetHeight, button.offsetWidth)
                const x = e.offsetX - ripple.offsetWidth / 2
                const y = e.offsetY - ripple.offsetHeight / 2
                ripple.setAttribute('style', `height: ${d}px; width: ${d}px;
                 top: ${y}px; left: ${x}px;`)
                 if(this.speed) {
                    ripple.style.animationDuration = `${this.speed}s`
                }
                if(this.bg) {
                    ripple.style.background = `${this.bg}`
                }
            }
            this.$nextTick(() => {
                setTimeout(() => {
                    this.animate = false
                }, timer)    
            })
        }
    }
}
</script>

<style>
   .cov-button-ripple {
        position: relative;   
        overflow: hidden;
        cursor: pointer;
    }
    .cov-ripple {
        display: block; 
        position: absolute;
        background: #D8C9F8;
        border-radius: 100%;
        transform: scale(0);
        z-index: 2;
    }
    .cov-ripple.animate {
        animation: ripple 0.65s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(3);
        }
    }
</style>