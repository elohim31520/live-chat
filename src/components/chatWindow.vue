<template>
    <div class="chat-window">
        <div v-if='error'>{{error}}</div>
        <div v-if='documents && documents.length' class='wrap' ref='win'>
            <div class="m-wrap" v-for='doc in formatedDocuments' :key="doc.id">
                <div class="time">{{ doc.createdAt }}</div>
                <div>
                    <span class="name">{{doc.name}}</span>
                    <span class='ms'>{{doc.message}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composable/getCollection'
import { formatDistanceToNow } from "date-fns"
import { computed ,onUpdated ,ref} from 'vue'
export default {
    setup (){
        const {error ,documents} = getCollection("messages")
        const formatedDocuments = computed(() => {
            if(documents.value){
                return documents.value.map(el => {
                    return {...el ,createdAt : formatDistanceToNow(el.createdAt.toDate())}
                })
            }
        })

        // auto scroll to bottom
        const win = ref(null)
        onUpdated (() => {
            console.log(win);
            win.value.scrollTop = win.value.scrollHeight
        })

        return {error ,documents ,formatedDocuments ,win}
    }
}
</script>

<style lang='scss'>
.chat-window{
    max-height: 600px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}
.wrap{
    .m-wrap{
        margin: .5rem .5rem 1.1rem;
    }
    .name{
        font-weight: bold;
        margin-right: .5rem;
        font-size: 13px;
    }
    .ms{
        color: #555;
        word-break: break-all;
        width: 100%;

    }
    .time{
        font-size: 12px;
        color: #888;
        &.right{
            text-align: right;
        }
    }
    .right{
        display: flex;
        justify-content: flex-end;
    }
}
</style>