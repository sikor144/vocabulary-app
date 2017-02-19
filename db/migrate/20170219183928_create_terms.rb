class CreateTerms < ActiveRecord::Migration[5.0]
  def change
    create_table :terms do |t|
      t.string :polish_term
      t.string :english_term
      t.references :vocabulary_set, foreign_key: true

      t.timestamps
    end
  end
end
