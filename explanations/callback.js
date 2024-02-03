function requesHandler(req, res) {
    UserActivation.findById(req.id, function(){
        if(err) {
            res.send(err;)
        } else {
                Tasks.finById(user.taskId, function(err, tasks) {
                    if (err) {

                    } else {
                        tasks.completed = true;
                        tasks.save(function (err)) {
                            if (err) {
                                return res.send(err);
                            } else {
                                res.send('Task ompleted')
                            }
                        }
                    }
                }
            }
        }
    })
}