<template>
    <div class="ripple">
        <div class="slot" :class="{one: children === 'one', two: children === 'two'}">
            <slot></slot>
        </div>
        <div @click="reppleClick" class="cov-button-ripple" :class="{br:br}"
        ref="covButtonRipple">   
            <span class="cov-ripple" ref="covRipple" :class="{animate: animate}"></span>
        </div>
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
        },
        br: {
            type: Boolean,
            required: false   
        },
        children: {
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
            console.log(this.children)
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
   .ripple {
       position: relative;
   }
   .slot {
      position: relative;
   }
   .slot.one * {
        position: relative;
        z-index: 1;
    }
   .slot.two *>* {
        position: relative;
        z-index: 1;
    }
   .cov-button-ripple {
        position: absolute;   
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        cursor: pointer;
    }
    .cov-button-ripple.br {
        border-radius: 50%;
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