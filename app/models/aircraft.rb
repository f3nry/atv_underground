class Aircraft < ActiveRecord::Base
  attr_accessible :tail_number,
                  :bow,
                  :moment

  attr_protected :updated_at, :created_at

  validates :tail_number, :presence => true

  validates :bow, :presence => true

  validates :moment, :presence => true

  belongs_to :model

  has_many :positions
  has_many :cg_entries
  has_many :moment_entries

  def cg
    "%0.2f" % (moment / bow * 1000)
  end
end
