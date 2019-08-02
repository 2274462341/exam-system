const leftList = [{
    type: '管理员',
    list: [{
        name: '试卷管理',
        id: '1',
        icon: 'el-icon-message',
        children: [{
            title: '添加试题',
            routers: '/main/addQuestions'
        }, {
            title: '试题分类',
            routers: '/main/questionsType'
        }, {
            title: '查看试题',
            routers: '/main/watchQuestions'
        }]
    }, {
        name: '用户管理',
        id: '2',
        icon: 'el-icon-menu',
        children: [{
            title: '添加用户',
            routers: '/main/addUser'
        }, {
            title: '用户展示',
            routers: '/main/showUser'
        }]
    }, {
        name: '考试管理',
        id: '3',
        icon: 'el-icon-camera',
        children: [{
            title: '添加考试',
            routers: '/main/addExam'
        }, {
            title: '试卷列表',
            routers: '/main/testExam'
        }]
    }, {
        name: '班级管理',
        id: '4',
        icon: 'el-icon-camera',
        children: [{
            title: '班级管理',
            routers: '/main/grade'
        }, {
            title: '教室管理',
            routers: '/main/classroom'
        }, {
            title: '学生管理',
            routers: '/main/students'
        }]
    }, {
        name: '阅卷管理',
        id: '5',
        icon: 'el-icon-star-off',
        children: [{
            title: '待批试卷',
            routers: '/main/examination'
        }]
    }]
}, {
    type: '出题者',
    list: [{
        name: '试卷管理',
        id: '1',
        icon: 'el-icon-message',
        children: [{
            title: '添加试题',
            routers: '/main/addQuestions'
        }, {
            title: '试题分类',
            routers: '/main/questionsType'
        }, {
            title: '查看试题',
            routers: '/main/watchQuestions'
        }]
    }, {
        name: '班级管理',
        id: '2',
        icon: 'el-icon-camera',
        children: [{
            title: '班级管理',
            routers: '/main/grade'
        }, {
            title: '教室管理',
            routers: '/main/classroom'
        }, {
            title: '学生管理',
            routers: '/main/students'
        }]
    }]
}]
export default leftList;
