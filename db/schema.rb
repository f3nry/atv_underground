# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120313193514) do

  create_table "aircrafts", :force => true do |t|
    t.string   "tail_number"
    t.float    "bow"
    t.float    "cg"
    t.float    "moment"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.integer  "model_id"
  end

  create_table "cg_entries", :force => true do |t|
    t.float    "arm"
    t.float    "weight"
    t.integer  "aircraft_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "models", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "moment_entries", :force => true do |t|
    t.float    "weight"
    t.float    "moment"
    t.integer  "aircraft_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "positions", :force => true do |t|
    t.string   "name"
    t.float    "moment"
    t.integer  "aircraft_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

end
