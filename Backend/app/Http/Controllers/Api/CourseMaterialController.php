<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourseMaterialRequest;
use App\Http\Requests\UpdateCourseMaterialRequest;
use App\Http\Resources\CourseMaterialResource;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use App\Models\CourseMaterial;
use Illuminate\Http\Request;

class CourseMaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Course $course)
    {
        $all_course_materials =  new CourseMaterialResource($course->materials);
        return $all_course_materials->response();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseMaterialRequest $request, Course $course)
    {
        return $course->materials()->create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course, CourseMaterial $course_material)
    {
        // dd('hi');
        return $course_material;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseMaterialRequest $request, Course $course, CourseMaterial $course_material)
    {
        $course_material->update($request->validated());
        return $course_material;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course, CourseMaterial $course_material)
    {
        $course_material->delete();
        return response()->json(['message' => "Course Material Deleted Successfully"], 200);
    }
}
