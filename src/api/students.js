export const getAllStudents = async()=>{
    return new Promise((resolve, reject)=>{
        fetch('http://localhost:2022/students').then(res=>{
            resolve(res.json());
        }).catch((err)=>{
            reject(err);
        });
    })
};

export const getStudentById = (id)=>{
    return new Promise((resolve, reject)=>{
        fetch(`http://localhost:2022/students/${id}`).then(res=>{
            resolve(res.json())
        }).catch(err=>{
            reject(err);
        })
    });
}

export const addStudent = async(formData)=>{
    return new Promise((resolve, reject)=>{
        fetch('http://localhost:2022/students',{
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            resolve(res.json())
        }).catch(err=>{
            reject(err);
        })
    })
}

export const updateStudent = async(id, formData)=>{
    return new Promise((resolve, reject)=>{
        fetch(`http://localhost:2022/students/${id}`,{
            method:'PUT',
            body:JSON.stringify(formData),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            resolve(res.json())
        }).catch(err=>{
            reject(err);
        })
    });
}

export const deleteStudent = async(id)=>{
    return new Promise((resolve, reject)=>{
        fetch(`http://localhost:2022/students/${id}`,{
            method:'DELETE'
        }).then(res=>{
            resolve(res.json());
        }).catch(err=>{
            reject(err);
        })
    })
}

export const searchStudents = async(searchQuery)=>{
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:2022/students?search=${searchQuery}`).then(res=>{
            resolve(res.json());
        }).catch(err=>{
            reject(err);
        })
    })
}