class Aircraft < ActiveRecord::Base
  attr_accessible :tail_number,
                  :bow,
                  :cg,
                  :moment

  attr_protected :updated_at, :created_at

  validates :tail_number, :presence => true

  validates :bow, :presence => true

  validates :cg, :presence => true

  validates :moment, :presence => true

  belongs_to :model
end
