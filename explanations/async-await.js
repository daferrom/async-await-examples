async function requestHandler(req, res){
    try {
        const user = await UserActivation.findById(req.userId)
        const tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task completed')
    }
    catch(error){
        res.send(e);
    }
}