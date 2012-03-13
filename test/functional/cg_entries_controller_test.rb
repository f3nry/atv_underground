require 'test_helper'

class CgEntriesControllerTest < ActionController::TestCase
  setup do
    @cg_entry = cg_entries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:cg_entries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create cg_entry" do
    assert_difference('CgEntry.count') do
      post :create, cg_entry: @cg_entry.attributes
    end

    assert_redirected_to cg_entry_path(assigns(:cg_entry))
  end

  test "should show cg_entry" do
    get :show, id: @cg_entry
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @cg_entry
    assert_response :success
  end

  test "should update cg_entry" do
    put :update, id: @cg_entry, cg_entry: @cg_entry.attributes
    assert_redirected_to cg_entry_path(assigns(:cg_entry))
  end

  test "should destroy cg_entry" do
    assert_difference('CgEntry.count', -1) do
      delete :destroy, id: @cg_entry
    end

    assert_redirected_to cg_entries_path
  end
end
