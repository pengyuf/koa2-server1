const {User} = require('./model')

!(async ()=>{
    // const zhangsan = new User({
    //     username:'zhangsan',
    //     password:'123',
    //     age:18,
    //     city:'beijing',
    //     gender:1
    // })
    // zhangsan.save()

    // const lisi = await User.create({
    //     username:'lisi',
    //     password:'123',
    //     age:23,
    //     city:'shenzhen'
    // })

    // 查询数据
    // const userList = await User.find()
    // const userList = await User.find({username:'zhangsan'})
    // const userList = await User.find().sort({age:-1})
    // console.log('userList 查询结果',userList)

    // const userList = await User.findOne({username:'zhangsan'})
    // console.log('userList 查询结果',userList)

    // 更新
    // const updateResult = await User.findOneAndUpdate(
    //     {username:'zhangsan'}, // 条件
    //     {age:30}, // 更新的内容
    //     {
    //         new:true // 返回更新后的数据
    //     }
    // )
    // console.log('更新',updateResult)

    // 删除
    // const removeResult = await User.findOneAndRemove({username:'lisi'})
    // console.log('删除',removeResult)

})()