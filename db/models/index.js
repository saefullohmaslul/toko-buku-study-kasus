const Sequelize = require("sequelize");
const { OrderModel } = require("./order-model");
const { TransactionModel } = require("./transaction-model");
const { UserModel } = require("./user-model");
const { ProductModel } = require("./product-model");

ProductModel.belongsTo(UserModel, { foreignKey: "user_id", as: "seller" });
UserModel.hasMany(ProductModel, { foreignKey: "user_id", as: "products" });

TransactionModel.belongsTo(UserModel, { foreignKey: "user_id", as: "buyer" });
UserModel.hasMany(TransactionModel, {
  foreignKey: "user_id",
  as: "transactions",
});

OrderModel.belongsTo(UserModel, { foreignKey: "user_id", as: "buyer" });
UserModel.hasMany(OrderModel, { foreignKey: "user_id", as: "orders" });

OrderModel.belongsTo(ProductModel, { foreignKey: "product_id", as: "product" });
ProductModel.hasMany(OrderModel, { foreignKey: "product_id", as: "orders" });

OrderModel.belongsTo(TransactionModel, {
  foreignKey: "transaction_id",
  as: "transactions",
});
TransactionModel.hasMany(OrderModel, {
  foreignKey: "transaction_id",
  as: "orders",
});

module.exports = {
  Sequelize,
  OrderModel,
  TransactionModel,
  UserModel,
  ProductModel,
};
