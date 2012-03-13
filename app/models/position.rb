class Position < ActiveRecord::Base
  belongs_to :aircraft

  attr_accessible :name, :moment

  validates :name, :presence => true
  validates :moment, :presence => true

end
