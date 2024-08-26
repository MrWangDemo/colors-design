<script setup lang="ts">
    import { Icon } from '@iconify/vue';

    import { ref, onMounted, onUnmounted } from 'vue';
    import ClipboardJS from 'clipboard';

    const props = defineProps(['data','title'])
    const copyButton = ref(null);
    const copySuccess = ref(false);
    const show = ref(true);
    const copyId = 'copyId';
    const  copyText = ref('');
    let clipboard = null;
    const { data, title } = props;
    console.log('data',data)
    onMounted(() => {


    });

    onUnmounted(() => {
      if (clipboard) {
        clipboard.destroy();
      }
    });

   function onClick(index){
     console.log("点击事件",index)
     clipboard = new ClipboardJS(`.${copyId}`);
     clipboard.on('success', (text) => {
       show.value = index;
       copyText.value = text.text;
       console.log("复制成功，",text.text)
       setTimeout(() => {
         show.value = false;
       }, 4000);
     });

     clipboard.on('error', () => {
       console.error('复制失败');
     });

   }

</script>
<template>
    <v-row>
        <v-col cols="12">
            <h5 class="text-h3 my-3 custom-text-primary">{{title}}</h5>
        </v-col>
        <v-col cols="12" lg="4" v-for="(card,index) in data" :key="card.title">
            <v-card elevation="5"  rounded="md" class="card-hover">
                <div>
                    <v-card-item :style="{backgroundColor:card.color}" height="250px" cover class="rounded-t-md align-end text-right">

<!--                        <v-card-item-->
<!--                            ><v-chip class="bg-surface text-body-2 font-weight-medium" size="small" rounded="sm" v-text="card.read"></v-chip-->
<!--                        ></v-card-item>-->
                    </v-card-item>
<!--                    <v-avatar size="40" class="mt-n7 mx-6">-->
<!--                        <img :src="card.avatar" alt="icon" height="40" />-->
<!--                    </v-avatar>-->
                    <v-card-item :style="{backgroundColor:card.color}" class="pt-4">
<!--                        <v-chip class="text-body-2 font-weight-medium bg-grey100" size="small" rounded="sm" v-text="card.category"></v-chip>-->
                        <div class="text-h4 " style="display: flex;align-items: center">
                            <span style="height: 20px" class="text-decoration-none color-inherits custom-title icon" :to="card.link">{{ card.title }}</span>
                            <div class="copy-success" :class="show===index?'show':''">复制成功!复制内容：{{copyText}}</div>
                            <Icon :data-clipboard-text="card.color" v-bind="props" style="margin-left: 60px;"  class="icon" :class="copyId" icon="mingcute:copy-line" height="32" width="32" @click="onClick(index)">
                            </Icon>
                        </div>

<!--                        <div class="d-flex align-center justify-space-between">-->
<!--                            <div>-->
<!--&lt;!&ndash;                                <v-avatar class="" size="18">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <EyeIcon size="18" class="text-textPrimary" />&ndash;&gt;-->
<!--&lt;!&ndash;                                </v-avatar>&ndash;&gt;-->
<!--                                <span class="text-subtitle-1 ml-2 text-textSecondary" v-text="card.view"></span>-->
<!--&lt;!&ndash;                                <v-avatar class="ml-4" size="18">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <Message2Icon size="18"  class="text-textPrimary" />&ndash;&gt;-->
<!--&lt;!&ndash;                                </v-avatar>&ndash;&gt;-->
<!--&lt;!&ndash;                                <span class="text-subtitle-1 ml-2 text-textSecondary" v-text="card.comments"></span>&ndash;&gt;-->
<!--                            </div>-->
<!--&lt;!&ndash;                            <div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <v-avatar size="10">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <CircleIcon size="10" class="text-textPrimary" />&ndash;&gt;-->
<!--&lt;!&ndash;                                </v-avatar>&ndash;&gt;-->
<!--&lt;!&ndash;                                <span class="text-subtitle-2 ml-2 text-textSecondary" v-text="card.time"></span>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        </div>-->
                    </v-card-item>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>
<style type="scss">
    .icon{
        cursor: pointer;

    }
    .icon:hover{
        color: rgb(var(--v-theme-primary)) !important;
    }

    .copy-success {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #4CAF50; /* 绿色背景 */
        color: white; /* 白色文本 */
        padding: 10px 10px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 16px;
        display: none;
        transition: opacity 0.3s ease-in-out;
        text-align: center;
    }

    .copy-success.show {
        display: block;
    }
</style>
