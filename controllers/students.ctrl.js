const Student = require('../models/student')

class StudentsCtrl{
    static async getAll(req){
        const options = {}
        if(req.query.search)
        {
            options.$or = [];
            options.$or.push({firstName:{$regex:new RegExp(req.query.search), $options:"i"}});
            options.$or.push({lastName:{$regex:new RegExp(req.query.search), $options:"i"}});
        }
        return Student.find(options);
    }
    static async getById(id){
        if(await Student.findById(id))
            return Student.findById(id)
        throw new Error(`There is no student by id ${id}`)
    }
    static async add(data)
    {
        const {firstName, lastName, username, password, email} = data;
        const student = new Student({
            firstName:firstName,
            lastName:lastName,
            username:username,
            password:password,
            email:email
        })
        return student.save();
    }
    static async update(id, data)
    {
        if(!(await Student.findById(id)))
            throw new Error(`There is no student by id ${id}`)
        const student = await Student.findById(id)
        const {firstName, lastName, username, password, email} = data;
        student.firstName = firstName;
        student.lastName = lastName;
        student.username = username;
        student.password = password;
        student.email = email;
        return student.save()
    }
    static async delete(id)
    {
        if(!(await Student.findById(id)))
            throw new Error(`There is no student by id ${id}`)
        return Student.findByIdAndDelete(id)
    }
}

module.exports = StudentsCtrl;