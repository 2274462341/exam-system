<template>
    <div class="left-content">
      <el-aside width="200px">
            <el-menu
              class="el-menu-vertical-demo"
              background-color="#2b2a2a"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
            <el-submenu v-for="(item,index) in list.list" :key="index" :index="item.id">
              <template slot="title"><i :class="item.icon"></i><span>{{item.name}}</span></template>
                <el-menu-item-group v-for="(i,k) in item.children" :key="k">
                  <router-link :to="i.routers" tag="p">
                      {{i.title}}
                  </router-link>
                </el-menu-item-group>
            </el-submenu>
          </el-menu>
      </el-aside>
    </div>
</template>

<script>
import leftList from '@/config/leftList';
export default {
    data () {
        return {
            list: [],
            authorMs: ''
        }
    },
    mounted () {
        this.authorMs = localStorage.getItem('authorMsg');
        this.getDa(this.authorMs)
    },
    methods: {
        getDa (msg) {
            leftList.forEach(item => {
                if (msg === item.type) {
                    this.list = item;
                }
            })
        }
    }
}
</script>

<style scoped>
  .left-content{
    width:200px;
    height: 100%;
    flex-shrink: 0;
    background:#2b2a2a;
  }
  span{
    color:white;
  }
  p{
    text-align: center;
    line-height: 50px;
    color:#fff;
  }
  .el-menu{
    background:#d89696;
  }
  .router-link-active{
    background: #3b3b3b;
    color: #ffd04b;
  }
</style>
