require 'test_helper'

class MomentEntriesControllerTest < ActionController::TestCase
  setup do
    @moment_entry = moment_entries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:moment_entries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create moment_entry" do
    assert_difference('MomentEntry.count') do
      post :create, moment_entry: @moment_entry.attributes
    end

    assert_redirected_to moment_entry_path(assigns(:moment_entry))
  end

  test "should show moment_entry" do
    get :show, id: @moment_entry
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @moment_entry
    assert_response :success
  end

  test "should update moment_entry" do
    put :update, id: @moment_entry, moment_entry: @moment_entry.attributes
    assert_redirected_to moment_entry_path(assigns(:moment_entry))
  end

  test "should destroy moment_entry" do
    assert_difference('MomentEntry.count', -1) do
      delete :destroy, id: @moment_entry
    end

    assert_redirected_to moment_entries_path
  end
end
