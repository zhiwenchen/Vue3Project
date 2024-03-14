<template>
    <el-row class=" bg-indigo-500" style="min-height: 100dvh;">
        <el-col :lg="16" :md="12" class=" flex justify-center items-center">
            <div>
                <div class=" text-6xl font-bold text-white my-3">欢迎光临</div>
                <div class=" text-white">此站点是Vue3+Vite商城后台管理系统</div>
            </div>
        </el-col>
        <!-- flex-col表示垂直布局 -->
        <el-col :lg="8" :md="12" class=" bg-light-50 flex justify-center items-center flex-col">
            <h2 class=" text-black text-3xl font-bold my-3">欢迎回来</h2>
            <div class=" flex items-center justify-center my-5">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span>账号密码登录</span>
                 <span class="h-[1px] w-16 bg-gray-200"></span>
            </div>
            
            <el-form :model="form" ref="ruleFormRef" :rules="rules">
                <el-form-item >
                    <el-input v-model="form.username" placeholder="请输入用户名" >
                        <template #prefix>
                          <el-icon class="el-input_icon"><user /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item >
                    <el-input v-model="form.password" placeholder="请输入密码" >
                        <template #prefix>
                          <el-icon class="el-input_icon"><lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" rounded class="w-[250px]">Create</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { User,Lock} from '@element-plus/icons-vue'
import { FormRules } from "element-plus";
// do not use same name with ref
const form = reactive({
    username: '',
    password: '',
})

const rules = {
    username:[
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
}

const onSubmit = () => {
    console.log('submit!')
}
</script>