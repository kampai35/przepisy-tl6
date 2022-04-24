class CommonController < ActionController::API

  def tags
    render json: {
        data: Recipe.collection.aggregate([{"$unwind": "$tags"}, {'$project' => {tags: 1}}]).pluck(:tags).uniq!
    }
  end

  def homepage
    render json: {
      random: Recipe.find(Recipe.pluck(:_id).sample),
      recent: Recipe.last
    }
  end
end