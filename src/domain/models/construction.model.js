const mongoose = require('mongoose');

const construction = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  description: String,
  ubication: String,
  phoneContact: String,
  infoAspectosLegales: Object,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  planesPDF: String,
  planesDWG: {
    tyoe: Boolean,
    default: false,
  },
  planeDWGPlanta: String,
  planeDWGCorte: String,
  planeDWGFachadas: String,
  planeDWGEstructurales: String,
  planeDWGElectrico: String,
  planeDWGHidroSanitarios: String,
  planeDWGCubierta: String,
  planeDWGOther: String,
  renderSketch: String,
  renderPdf: String,
  presupuestoExcel: String,
  presupuestoPdf: String,
  presupuestoValue: Number,
  dineroCompleto: Boolean,
  dineroFaltante: Number,
  solicitaFinanciacion: Boolean,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Construction', construction);
