const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
  sequelize.define("Temperament", {
    name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  
},
{
  timestamps:false,
  // timestamps: true,
  // createdAt: false,
  // updatedAt: "Actualizacion",
}
);
};