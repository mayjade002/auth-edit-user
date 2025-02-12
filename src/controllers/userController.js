exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;

    if (!updatedData.name || !updatedData.email) {
        return res.status(400).json({ message: "Faltan datos requeridos (name, email)" });
    }

    res.json({
        message: "Usuario actualizado correctamente",
        userId: userId,
        updatedData: updatedData
    });
};
