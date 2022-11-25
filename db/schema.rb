# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_17_114558) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "categories"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "category_options", force: :cascade do |t|
    t.string "releaseYear"
    t.string "brand"
    t.string "silhouette"
    t.string "colorway"
    t.bigint "sneaker_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_category_options_on_category_id"
    t.index ["sneaker_id"], name: "index_category_options_on_sneaker_id"
  end

  create_table "order_sneakers", force: :cascade do |t|
    t.bigint "sneaker_id", null: false
    t.bigint "order_id", null: false
    t.integer "price"
    t.string "sku"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_order_sneakers_on_order_id"
    t.index ["sneaker_id"], name: "index_order_sneakers_on_sneaker_id"
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "amount"
    t.string "order_address"
    t.string "order_email"
    t.string "order_date"
    t.string "order_status"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "sales", force: :cascade do |t|
    t.bigint "sneaker_id", null: false
    t.bigint "user_id", null: false
    t.integer "price"
    t.integer "size"
    t.string "condition"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sneaker_id"], name: "index_sales_on_sneaker_id"
    t.index ["user_id"], name: "index_sales_on_user_id"
  end

  create_table "sneakers", force: :cascade do |t|
    t.string "sku"
    t.string "brand"
    t.string "name"
    t.string "colorway"
    t.string "gender"
    t.string "silhouette"
    t.string "releaseYear"
    t.string "releaseDate"
    t.integer "retailPrice"
    t.integer "estimatedMarketValue"
    t.string "story"
    t.string "image"
    t.string "links"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "shipping_address"
    t.string "phone"
    t.string "billing_address"
    t.string "profile_picture"
    t.integer "current_order"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wish_items", force: :cascade do |t|
    t.bigint "sneaker_id", null: false
    t.bigint "user_id", null: false
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sneaker_id"], name: "index_wish_items_on_sneaker_id"
    t.index ["user_id"], name: "index_wish_items_on_user_id"
  end

  add_foreign_key "category_options", "categories"
  add_foreign_key "category_options", "sneakers"
  add_foreign_key "order_sneakers", "orders"
  add_foreign_key "order_sneakers", "sneakers"
  add_foreign_key "orders", "users"
  add_foreign_key "sales", "sneakers"
  add_foreign_key "sales", "users"
  add_foreign_key "wish_items", "sneakers"
  add_foreign_key "wish_items", "users"
end
