<template>
    <div>
        <el-dialog title="添加班级" :visible.sync="dialogFormVisible=flag">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="班级名" prop="name">
                    <el-input v-model="ruleForm.name" :disabled="disable"></el-input>
                </el-form-item>
                <el-form-item label="教室号" prop="room_text">
                    <el-select v-model="ruleForm.room_text" placeholder="请选择教室号">
                        <el-option v-for="item in list" :key="item.room_id" :label="item.room_text" :value="item.room_text">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="课程名" prop="regions">
                    <el-select v-model="ruleForm.regions" placeholder="请选择课程名">
                        <el-option v-for="item in subject" :key="item.subject_id" :label="item.subject_text" :value="item.subject_id"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm()">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: ['flag', 'list', 'subject'],
    data () {
        return {
            disable: false,
            ruleForm: {
                name: '',
                room_text: '',
                regions: ''
            },
            formLabelWidth: '120px',
            rules: {
                name: [
                    { required: true, message: '请输入班级名', trigger: 'change' },
                    { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'change' }
                ],
                room_text: [
                    { required: true, message: '请选择教室号', trigger: 'change' }
                ],
                regions: [
                    { required: true, message: '请选择课程名', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        submitForm () {
            // this.dialogFormVisible = false
        }
    }
}
</script>

<style scoped>

</style>
