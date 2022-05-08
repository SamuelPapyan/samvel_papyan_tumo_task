const express = require('express')
const router = express.Router()
const StudentsCtrl = require('../controllers/students.ctrl')
const studentValidation = require('../managers/studentValidation')

router.route('/').get(async(req,res)=>{
        try{
            const data = await StudentsCtrl.getAll(req)
            res.json({
                success:true,
                data:data,
                message:"Students are generated"
            });
        }
        catch(e){
            res.json({
                success:false,
                data:null,
                message:e.message
            })
        }
    })
    .post(
        async(req,res)=> {
            const errors = studentValidation(req.body);
        try{
            if(errors.length > 0)
                throw new Error("Validation Error");
            const data = await StudentsCtrl.add(req.body)
            res.json({
                success:true,
                data:data,
                message:"Student is added"
            });
        }
        catch(e){
            res.json({
                success:false,
                data:null,
                validationErrors:errors,
                message:e.message
            })
        }
    })

router.route('/:id').get(async(req,res)=>{
    try{
        const data = await StudentsCtrl.getById(req.params.id)
        res.json({
            success:true,
            data:data,
            message:"Student is generated"
        });
    }
    catch(e){
        res.json({
            success:false,
            data:null,
            message:e.message
        })
    }
}).put(async(req,res)=>{
    const errors = studentValidation(req.body);
    try {
        if(errors.length > 0)
            throw new Error('Validation Error');
        const data = await StudentsCtrl.update(req.params.id, req.body)
        res.json({
            success:true,
            data:data,
            message:"Student is updated"
        });
    }
    catch(e){
        res.json({
            success:false,
            data:null,
            validationErrors: errors,
            message:e.message
        });
    }
}).delete(async(req,res)=>{
        try{
            const data = await StudentsCtrl.delete(req.params.id)
            res.json({
                success:true,
                data:data,
                message:"Student is deleted"
            })
        }
        catch(e){
            res.json({
                success:false,
                data:null,
                message:e.message
            })
        }
    });

module.exports = router