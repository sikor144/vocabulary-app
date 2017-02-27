class VocabularySetsController < ApplicationController
  def index
    @vocabulary_sets = VocabularySet.all
  end
end
