class TodoSerializer < ActiveModel::Serializer
  attributes :id, :task, :completed
end
