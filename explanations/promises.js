

function requestHandler() {
    UserActivation.findById()
        .then(function (user) {
           return Tasks.findById(user.tasksId)
        })
        .then( function() {
            tasks.completed = true;
            return tasks.save();
        })
        .then(function() {
            res.send('Tasks completed');
        })
        .catch(function(){
            resizeBy.send(err);
        })
    };

// las tareas se ejecutan una tras otra //