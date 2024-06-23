const Establecimiento = require('../models/modelo_establecimiento');
const controller = {};

// Controlador para crear un nuevo establecimiento
controller.create = async (req, res) => {
  try {
    // Extraer datos del cuerpo de la solicitud
    const { title, category, lat, lng, description, priceRange } = req.body;

    // Crear un nuevo documento de Establecimiento
    const nuevoEstablecimiento = new Establecimiento({
      title: title,
      category: category,
      lat: lat,
      lng: lng,
      description: description,
      priceRange: priceRange,
    });

    // Guardar el establecimiento en la base de datos
    await nuevoEstablecimiento.save();

    // Enviar respuesta exitosa
    res.status(201).json({
      message: "Establecimiento creado con éxito",
      data: nuevoEstablecimiento,
    });
  } catch (error) {
    // Manejar errores
    res.status(500).json({
      message: "Error al crear el establecimiento",
      error: error.message,
    });
  }
};

// Obtener todos los establecimientos según la categoría
controller.comida = async (req, res) => {
  try {
    const lista = await Establecimiento.find({ category: "comida" });
    if (!lista) {
      return res.status(409).json({ error: "Error obteniendo los establecimientos" });
    }

    return res.status(200).json({ lista });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

controller.bebida = async (req, res) => {
  try {
    const lista = await Establecimiento.find({ category: "bebidas" });
    if (!lista) {
      return res.status(409).json({ error: "Error obteniendo los establecimientos" });
    }

    return res.status(200).json({ lista });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

controller.servicios = async (req, res) => {
  try {
    const lista = await Establecimiento.find({
      category: "servicios",
    });
    if (!lista) {
      return res.status(409).json({ error: "Error obteniendo los establecimientos de lista" });
    }
    return res.status(200).json({ lista });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

controller.lugaresDeInteres = async (req, res) => {
  try {
    const lista = await Establecimiento.find({
      category: "lugaresDeInteres",
    });
    if (!lista) {
      return res.status(409).json({
        error: "Error obteniendo los establecimientos de lugares de interés",
      });
    }
    return res.status(200).json({ lista });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

controller.utilidadesUniversitarias = async (req, res) => {
  try {
    const lista = await Establecimiento.find({
      category: "utilidadesUniversitarias",
    });
    if (!lista) {
      return res.status(409).json({
        error: "Error obteniendo los establecimientos de utilidades universitarias",
      });
    }
    return res.status(200).json({ lista });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

controller.ocio = async (req, res) => {
  try {
    const lista = await Establecimiento.find({ category: "ocio" });
    if (!lista) {
      return res.status(409).json({ error: "Error obteniendo los establecimientos de ocio" });
    }
    return res.status(200).json({ lista });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

controller.obtenerAleatorio = async (req, res) => {
  try {
    const establecimientos = await Establecimiento.find();
    if (!establecimientos) {
      return res.status(409).json({ error: "Error obteniendo los establecimientos" });
    }
    const establecimientosAleatorios = [];
    for (let i = 0; i < 7; i++) {
      const establecimientoAleatorio = establecimientos[Math.floor(Math.random() * establecimientos.length)];
      establecimientosAleatorios.push(establecimientoAleatorio);
    }
    return res.status(200).json({ establecimientos: establecimientosAleatorios });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = controller;
