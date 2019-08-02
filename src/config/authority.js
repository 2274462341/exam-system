const authority = [
    {
        name: '添加身份',
        input: [
            {
                placeholder: '请输入身份名称'
            }
        ]
    },
    {
        name: '添加api接口权限',
        input: [
            {
                placeholder: '请输入api接口权限名称'
            },
            {
                placeholder: '请输入api接口权限url'
            },
            {
                placeholder: '请输入api接口权限方法'
            }
        ]
    },
    {
        name: '添加视图接口权限',
        select: [
            {
                placeholder: '请选择已有视图',
                options: 0
            }
        ]
    },
    {
        name: '给身份设置api接口权限',
        select: [
            {
                placeholder: '请选择身份id',
                options: 0
            },
            {
                placeholder: '请选择api接口权限',
                options: 0
            }
        ]
    },
    {
        name: '给身份设置视图权限',
        select: [
            {
                placeholder: '请选择身份id',
                options: 0
            },
            {
                placeholder: '请选择api接口权限',
                options: 0
            }
        ]
    }
]
export default authority
