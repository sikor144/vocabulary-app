User.destroy_all

user = User.new
user.email = 'sikor1413@gmail.com'
user.password = 'password'
user.password_confirmation = 'password'
user.save!

Term.destroy_all
VocabularySet.destroy_all

set1 = VocabularySet.create!(name: 'First set', user_id: user.id)
set2 = VocabularySet.create!(name: 'Second set', user_id: user.id)
set3 = VocabularySet.create!(name: 'Third set', user_id: user.id)

e = %w(reverse dipstick reference devote occurence vast gear horn will keep on doing their best provide security)
p = %w(rządowa kolumna trzech samochodów pojazd premier Beaty Szydło jechał w środku wyprzedzała fiata seicento)

VocabularySet.all.each do |set|
  20.times do
    set.terms << Term.create(english_term: e.sample, polish_term: p.sample)
  end
end
